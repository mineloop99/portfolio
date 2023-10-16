import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/avatar.svg"
        style={{
          cursor: "pointer",
          marginTop: "-5px",
        }}
        height={350}
        width={350}
        alt="Logo of the web"
      ></Image>
    </Link>
  );
}

export default Logo;
