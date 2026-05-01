import products from "@/app/data/products.json";

export async function GET() {
  return Response.json(products);
}