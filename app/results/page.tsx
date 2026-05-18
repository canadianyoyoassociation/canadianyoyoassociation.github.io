import { Metadata } from "next";
import { Image } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Results",
};

function getImgPath(fileName: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}/result_files/${fileName}`;
}

const Results = () => {
  return (
    <>
{/*
      NOTE: delete both lines above ⬆️ and below ⬇️ to uncomment a block
*/}

      <h1>Results - 1A division Finals</h1>
      <Image src={getImgPath("results_1Afinal.png")} width="100%" />

      <h1>Results - Open division</h1>
      <Image src={getImgPath("results_open.png")} width="100%" />

      <h1>Results - Junior division</h1>
      <Image src={getImgPath("results_junior.png")} width="100%" />

      <h1>Results - 1A division Preliminaries</h1>
      <Image src={getImgPath("results_1Aprelim.png")} width="100%" />

      
{/*
      <h1>Performance order - 1A division Finals</h1>
      <Image src={getImgPath("order_1Afinal.png")} width="400px" />
*/}

      <h1>Performance order - Junior & Open divisions</h1>
      <Image src={getImgPath("order_junior_open.png")} width="800px" />

{/*
      <h1>Performance order - International division</h1>
      <Image src={getImgPath("order_junior.png")} width="400px" />
*/}
{/*
      <h1>Performance order - 1A division Preliminaries</h1>
      <Image src={getImgPath("order_1a_prelim.png")} width="800px" />
*/}

{/*
      <h1>Results - International division</h1>
      <Image src={getImgPath("results_junior.png")} width="100%" />
*/}


    </>
  );
};

export default Results;
