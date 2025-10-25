import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Link href="/task1" className="text-2xl font-bold">Задание 1</Link>
      <Link href="/task2" className="text-2xl font-bold">Задание 2</Link>
      <Link href="/task3" className="text-2xl font-bold">Задание 3</Link>
    </div>
  );
}
