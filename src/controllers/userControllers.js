import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const getUser = async (req, res) => {
  try {
    let data = await prisma.like_res.findMany(

    );
    res.send(data);
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};

//like - unlike - prisma
const createLike = async (req, res) => {

  try {
    let { user_id, res_id } = req.body;
  
    const like = await prisma.like_res.findMany({
      where: {
        user_id:Number(user_id),
        res_id:Number(res_id),
      },
    });
  
    if (like.length === 0) {
      let day = new Date();
      let strDay = day.toISOString();
      let newData = {
        user_id,
        res_id,
        date_like: strDay,
      };
      await prisma.like_res.create({
        data:newData
      });
      return res.send("You just liked");
    } else {
    
      await prisma.like_res.deleteMany({
        where: {
          user_id:Number(user_id),
          res_id:Number(res_id),
        },
      });
      return res.send("You just unLiked");
    }
  } catch (error) {
    res.send(`Backend error: ${error}`);
  }
};
//lấy ds like theo nhà hàng - prisma 
const getLikeListByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    let data = await prisma.like_res.findMany({
      where: {
        res_id:Number(res_id),
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
// lấy ds like theo user - prisma 
const getLikeListByUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await prisma.like_res.findMany({
      where: {
        user_id:Number(user_id),
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
// lấy ds đánh giá theo nhà hàng - ok 
const getRateListByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    let data = await prisma.rate_res.findMany({
      where: {
        res_id:Number(res_id),
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
// lấy ds đánh giá theo user - ok
const getRateListByUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await prisma.rate_res.findMany({
      where: {
        user_id:Number(user_id),
      },
    });
    if (data != "") {
      res.send(data);
    } else {
      res.send("get data fail");
    }
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};

// đánh giá nhà hàng -ok
const createRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    let day = new Date();
    let strDay = day.toISOString();
    let newData = {
      user_id,
      res_id,
      amount,
      date_rate: strDay,
    };
    await prisma.rate_res.create({
      data:newData});
    res.send("create rate successfully");
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};
//user đặt món
const createOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let newData = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    await prisma.order_food.create({
      data:newData,
    });
    res.send("order successfully");
  } catch (error) {
    res.send(`BE error ${error}`);
  }
};


export {
  createOrder,
  getLikeListByUser,
  getRateListByUser,
  createRate,
  getRateListByRes,
  getLikeListByRes,
  createLike,getUser
};
