import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getFood = async (req, res) => {
    try {
      let data = await prisma.food.findMany(

      );
      res.send(data);
    } catch (error) {
      res.send(`BE error ${error}`);
    }
  };

  export {
getFood
  }