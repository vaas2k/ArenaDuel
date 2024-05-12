import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import { stringify } from "querystring";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const { profile, background, email } = await req.json();

  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    console.log(1);

    if (!user) {
      return new Response(
        JSON.stringify({ msg: "USER NOT FOUND", status: 404 })
      );
    }

    if (background) {
      
      console.log(2);

      const userinfo = await prisma.userInfo.findFirst({
        where: { userID: user.id },
      });
      const backgroundImage = await cloudinary.uploader.upload(background, {
        resource_type: "image",
        folder: "background",
      });



      if (!userinfo) {
        await prisma.userInfo.create({
          data: {
            userID: user.id,
            background_image: backgroundImage.url as string,
          },
        });
      }
      await prisma.userInfo.update({
        where: {
          id: userinfo?.id,
          userID: userinfo?.userID,
        },
        data: {
          background_image: backgroundImage.url as string,
        },
      });
    }

    if(profile) {
      const profileImage = await cloudinary.uploader.upload(profile, {
       resource_type: "image",
       folder: "profile",
      })
      await prisma.user.update({
        where :{ id : user.id},
        data : {
          image : profileImage.url as string
        }
      })
    }

    return new Response(
      JSON.stringify({
        msg: "success",
        status: 200,
      })
    );

  } catch (error) {
    console.log(error);
  }
}
