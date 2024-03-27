import { randomBytes } from "crypto";
import { NextResponse, NextRequest } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

const generateRandomName = () => {
    const randomString = randomBytes(6).toString('hex');
    const timestamp = Date.now();
    const randomName = `file_${timestamp}_${randomString}`;

    return randomName;
}   

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    data.append("file", file);
    data.append("pinataMetadata", JSON.stringify({ name: generateRandomName() }));

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PINATA_API_KEY}`,
      },
      body: data,
    });

    const { IpfsHash } = await res.json();
    return NextResponse.json({ IpfsHash }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
