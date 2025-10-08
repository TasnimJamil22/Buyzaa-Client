"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { TProduct } from "@/types";
import { Link } from "@heroui/link";

interface IProps {
  product: TProduct;
}
export default function ProductCard({ product }: IProps) {
  const { _id, name, description, price, quantity, category, images } =
    product || {};

  return (
    <Card className="max-w-xs shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <CardHeader>
        <Image
          alt="Sunglasses"
          src={images && images.length > 0 ? images[0] : undefined}
          className="w-96 h-48 object-cover mx-auto "
        />
      </CardHeader>

      {/* Product Info */}
      <CardBody className="px-4 py-3">
        <Link href={`/products/${_id}`}>
          <h3 className=" font-semibold text-2xl">{name}</h3>
        </Link>
        <p className="text-pink-900 ">
          Category:<span className="text-pink-800">{category?.name}</span>
        </p>
        <p className="text-sm text-gray-500">{description}</p>

        {/* Price + Stock */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">${price}</span>
          <span className="text-sm text-green-600">In Stock</span>
        </div>
      </CardBody>

      {/* Add to Cart Button */}
      <CardFooter className="px-4 pb-4">
        <Button color="primary" className="w-full rounded-md">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
