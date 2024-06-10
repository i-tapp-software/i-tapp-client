export function Banner() {
  return (
    <div className="hidden overflow-hidden rounded-[36px] relative max-h-[95%] w-1/2 bg-primary z-0 md:flex justify-center items-center h-full min-h-[calc(100vh-64px)]">
      <div className="size-[38em] bg-grey-4  rounded-[600px] absolute -top-[300px] -left-[300px] z-10"></div>

      <div className="bg-white m-auto w-[88%] h-[90%]  absolute z-20"></div>
      <div className="size-[38em] bg-grey-4 rounded-[600px] absolute -bottom-[100px] -right-[350px] z-10 "></div>
    </div>
  );
}
