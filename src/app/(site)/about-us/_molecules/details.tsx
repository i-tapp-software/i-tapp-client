import { Wrapper } from "@/components/wrapper";
import Image from "next/image";
import AboutImg from "@/assets/images/about-us.png";

export function Details() {
  return (
    <Wrapper>
      <h3 className="text-h4 sm:text-h3">I-Tapp</h3>
      <p className=" max-w-[45em] mt-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla eu
        lorem rutrum tempus. Integer tincidunt tellus quis est tincidunt auctor.
      </p>
      <div className="bg-red-100 w-full h-[25em] rounded-tr-[3em] my-16 relative ">
        <Image
          className="rounded-tr-[3em]"
          src={AboutImg}
          alt="Company Banner"
          layout="fill" // Makes the image cover the div
          quality={100} // Adjusts image quality (optional)
          priority // Optional: loads the image with priority
        />
        <div className="md:flex flex-col absolute w-32  -bottom-16 right-16 hidden">
          <div className=" bg-primary w-[4.8em] h-20 rounded-br-[1.5em] "></div>
          <div className=" bg-grey-3 w-12 h-[3.3em] rounded-tl-[1.5em] self-end"></div>
        </div>
      </div>
      <p className="max-w-[48em] text-sm sm:text-base">
        Phasellus scelerisque eros felis, ut lobortis ipsum mattis ullamcorper.
        Morbi magna orci, ornare vel auctor non, malesuada sed dolor.
        Pellentesque facilisis condimentum nunc, nec placerat eros aliquam
        lobortis. Nullam non bibendum neque, nec sagittis risus. Proin est
        metus, bibendum at maximus quis, placerat id sapien. Fusce ipsum quam,
        placerat sit amet mauris vitae, suscipit ultrices turpis. Etiam ac eros
        est. Quisque id rhoncus dolor, eget gravida ante. Integer commodo id
        lacus at fringilla. <br />
        <span className="font-bold mt-8">
          Phasellus scelerisque eros felis, ut lobortis ipsum mattis
          ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada sed
          dolor. Pellentesque facilisis
        </span>
      </p>
    </Wrapper>
  );
}
