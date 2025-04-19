import Image from "next/image";


const Logo = ({variant = 'one', fillTextColor = '#00004B'}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Image
          src={"/images/others/Nextdev Lab icon mark.svg"}
          width="100"
          height="50"
        />
      </div>
      <div
        style={{
          // border: "1px solid green",
        }}
      >
        <h2
          style={{
            // color: fillTextColor,
            fontSize: "30px",
            position: "relative",
            top: "10px",
          }}
        >
          Nextdev Lab
        </h2>
        <p
          style={{
            // color: fillTextColor,
            // fontSize: "30px",
            position: "relative",
            top: "-17px",
          }}
        >
          End to end solution
        </p>
      </div>
    </div>
  );
}

export default Logo;