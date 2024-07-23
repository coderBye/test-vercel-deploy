import Image from "next/image";

import Pic from "../images/subing.png";

export default function ArticleItem() {
  return (
    <div className="">
      {/* img */}
      <Image src={Pic} width={300} height={300} alt="" />
      {/* tag */}
      <div className="my-3 text-xl font-bold">title</div>
      {/* title */}
      <div className="ml-2 text-orange-500">description</div>
      {/* dec */}
      {/* info */}
    </div>
  );
}
