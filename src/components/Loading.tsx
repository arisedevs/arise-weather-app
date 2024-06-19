import ThemeSwitcher from "./ThemeSwitcher";

function Loading() {

    return (
        <main className="p-5 h-dvh max-w-[1300px] mx-auto ">
      <div className="flex justify-end">
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col items-center justify-center h-[700px]">
      <span className="loading loading-ring loading-lg text-primary"></span>

      </div>
    </main>
    )
}

export default Loading
