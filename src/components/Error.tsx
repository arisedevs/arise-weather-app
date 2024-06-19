import ThemeSwitcher from "./ThemeSwitcher";

function Error() {
  return (
    <main className="p-5 h-dvh max-w-[1300px] mx-auto ">
      <div className="flex justify-end">
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col items-center justify-center h-[700px]">
        <img src="/icons/09n.svg" alt="" className="w-56 "/>
        <h1 className="text-2xl">Too Many Requests.</h1>
        <p>Please come back later.</p>
      </div>
    </main>
  );
}

export default Error;
