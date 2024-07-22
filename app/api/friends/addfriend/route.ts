import { prisma } from "@/utils/prisma";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const getUser = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!getUser || !getUser.id) {
      return new Response(
        JSON.stringify({
          msg: 'User not found',
          status: 404,
        }),
        { status: 404 }
      );
    }

    await prisma.friends.create({
      data: {
        userID: getUser.id,
        sender_name: data.sender_name,
        sender_email: data.sender_email,
        sender_image: data.sender_image,
        accepted: false,
      },
    });

    await prisma.notifications.create({
      data: {
        userID: getUser.id,
        sender_name: data.sender_name,
        sender_email: data.sender_email,
        sender_image: data.sender_image,
        message: "Friend Request",
      },
    });

    return new Response(
      JSON.stringify({
        msg: 'Good!',
        status: 200,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        msg: 'Internal Server Error',
        status: 500,
      }),
      { status: 500 }
    );
  }
}
