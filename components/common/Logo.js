import Image from "next/image";


const Logo = ({variant = 'one', fillTextColor = '#00004B'}) => {
    return (
      <Image src={"/images/others/logo.jpg"} width="200" height="100" />
    );
}

export default Logo;