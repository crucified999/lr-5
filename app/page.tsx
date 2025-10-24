import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/task1">Задание 1</Link>
      <Link href="/task2">Задание 2</Link>
      <Link href="/task3">Задание 3</Link>
    </div>
  );
}
