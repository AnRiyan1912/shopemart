import { SideBar } from "../components/ui/SideBar";

export const ProfilePage = () => {
  return (
    <>
      <SideBar>
        <div>
          <div className="flex justify-center">
            <div>
              <img src="" alt="ini img" className="w-20 h-20" />
            </div>
            <div className="mt-5">
              <form action="">
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input type="text" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );
};
