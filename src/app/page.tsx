import { HeaderPage } from "@/page/Header";
import { MainPage } from "@/page/Main";
import  {SliderPage}  from "@/page/SliderPage";

export default function Home() {
  return (
    <>
      <HeaderPage />
      <SliderPage/>
      <MainPage/>
    </>
  );
}
