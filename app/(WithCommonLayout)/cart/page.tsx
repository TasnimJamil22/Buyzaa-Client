// "use client";
// import { CartIcon } from "@/components/icons";
// import MyCart from "@/components/UI/Cart";
// import { useCart } from "@/context/cart.provider";

// import React from "react";

// export default function Cart() {
//   // const { cartItems } = useCart();
//   return (
//     // <div>
//     //   <h1>Cart</h1>
//     //   <MyCart />
//     // </div>

//     <div className="fixed bottom-4 right-4 w-full max-w-sm border rounded-xl  shadow-2xl z-50">
//       <div className="px-4 py-4 text-default-700">
//         {/* Cart Header */}
//         <h1 className="text-xl font-bold mb-3 text-center sm:text-left">
//           🛒 Your Cart
//         </h1>

//         {/* Cart Container */}
//         <div className="  rounded-lg p-4 max-h-[500px] overflow-y-auto">
//           <MyCart />
//         </div>

//         {/* Checkout Section */}
//         <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center gap-3">
//           <div className="text-lg font-semibold text-yellow-500">
//             Total: $<span>{/* calculate total */}</span>
//           </div>
//           <button className="w-full sm:w-auto bg-accent hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { CartIcon } from "@/components/icons";
import MyCart from "@/components/UI/Cart";
import { useCart } from "@/context/cart.provider";
import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { useDisclosure } from "@heroui/modal";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  type DrawerSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";

  const [size, setSize] = React.useState<DrawerSize>("xs");

  const handleOpen = (drawaeSize: DrawerSize) => {
    setSize(drawaeSize);
    onOpen();
  };
  const { cartItems } = useCart();

  // 🧮 Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    // <div>
    //   <h1>Cart</h1>
    //   <MyCart />
    // </div>

    <>
      <div className="flex justify-center items-center h-screen">
        <Button key={size} onPress={() => handleOpen(size)}>
          <Badge content={cartItems.length} color="danger">
            <CartIcon />
          </Badge>
        </Button>
      </div>
      <Drawer isOpen={isOpen} size={size} onClose={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                🛒 Your Cart
              </DrawerHeader>
              <DrawerBody>
                {/* Cart Container */}

                <div className="  rounded-lg p-4 max-h-[800px] overflow-y-auto">
                  <MyCart />
                </div>
              </DrawerBody>
              <DrawerFooter>
                {/* Checkout Section */}

                <div className="flex  py-5 w-full  rounded-sm justify-between">
                  <Link
                    href={`/profile/payment/{paymentId}`}
                    className="  text-center w-1/2 mx-auto  py-5 bg-accent rounded-l-md hover:bg-red-300"
                  >
                    Checkout
                  </Link>

                  <span className="w-1/2 text-center py-5 bg-orange-400 rounded-r-md">
                    {/* calculate total */}${total.toFixed(2)}
                  </span>
                </div>

                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
