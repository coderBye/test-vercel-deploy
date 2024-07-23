import Image from "next/image";

import Pic from "../images/subing.png";

export default function ArticleItem() {
  return (
    <div className="">
      {/* img */}
      <Image
        src="https://gitee.com/zhou_yong99995/images/raw/master/img/12.png"
        width={300}
        height={300}
        alt=""
      />
      {/* tag */}
      <div className="my-3 text-xl font-bold">title</div>
      {/* title */}
      <div className="ml-2 text-orange-500">description</div>
      {/* dec */}
      {/* info */}
    </div>
  );
}
