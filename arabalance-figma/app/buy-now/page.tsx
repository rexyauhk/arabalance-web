import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export const metadata = {
  title: "線上購買 | AraBalance",
  description: "線上購買即將開放。",
};

/** Checkout / payment temporarily disabled until payment gateway is ready. */
export default function BuyNowPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center bg-gray-50 px-6 pt-24 pb-16">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 inline-flex rounded-full bg-[#1A504F]/10 p-4">
          <ShoppingCart className="h-10 w-10 text-[#1A504F]" aria-hidden />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          線上購買即將開放
        </h1>
        <p className="mb-2 text-lg text-gray-600">
          Online checkout is temporarily unavailable.
        </p>
        <p className="mb-10 text-gray-600">
          支付系統尚在搭建中，完成後將開放網上訂購。造成不便，敬請見諒。
        </p>
        <Link
          href="/"
          className="inline-block rounded-3xl bg-[#1A504F] px-8 py-3 text-white transition-colors hover:bg-[#143d3c]"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
}
