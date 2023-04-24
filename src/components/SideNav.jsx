export const SideNav = () => {
  return (
    <>
      <div className="flex justify-start pt-[32px] flex-col gap-[44px] font-bold">
        <div className="w-[40px] h-[40px] flex justify-center items-center ml-[54px]">
          <button>
            <img
              src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326657/main%20stack/mainstack-logo_uv7odk.png"
              alt=""
            />
          </button>
        </div>

        <div className="flex flex-col gap-[32px]">
          <div className="text-[14px]">
            <button>
              <div className="flex justify-start items-center mb-[24px]">
                <div className="w-[2px] bg-[#FF5403] h-[28px] "></div>
                <div className="flex justify-start gap-[12px] items-center ml-[52px]">
                  <div className="w-[20px] h-[20px] flex justify-center items-center">
                    <img
                      src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/dashboard_nixvss.png"
                      alt=""
                    />
                  </div>
                  <p>Dashboard</p>
                </div>
              </div>
            </button>

            <div className="flex justify-start gap-[12px] items-center  mb-[24px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/edit_gqxuia.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 1</p>
              </button>
            </div>

            <div className="flex justify-start gap-[12px] items-center mb-[24px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326657/main%20stack/group_joss7e.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 2</p>
              </button>
            </div>

            <div className="flex justify-start gap-[12px] items-center mb-[24px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326657/main%20stack/hourglass_empty_chkqvk.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 3</p>
              </button>
            </div>
          </div>

          <div className="text-[14px]">
            <div className="flex justify-start gap-[12px] items-center  mb-[20px] ml-[54px] text-[12px] text-[#4D5760] font-semibold">
              <p>OTHERS 1</p>
            </div>

            <div className="flex justify-start gap-[12px] items-center mb-[24px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/add_a_photo_fdshy8.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 4</p>
              </button>
            </div>

            <div className="flex justify-start gap-[12px] items-center mb-[24px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326657/main%20stack/delete_vk3ywg.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 5</p>
              </button>
            </div>
          </div>

          <div className="text-[14px]">
            <div className="flex justify-start gap-[12px] items-center  mb-[20px] ml-[54px] text-[12px] text-[#4D5760] font-semibold">
              <p>OTHERS 2</p>
            </div>

            <div className="flex justify-start gap-[12px] items-center mb-[26px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326658/main%20stack/subscriptions_vavldi.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 6</p>
              </button>
            </div>

            <div className="flex justify-start gap-[12px] items-center mb-[24px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326657/main%20stack/file_present_mnnnx2.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 7</p>
              </button>
            </div>

            <div className="flex justify-start gap-[12px] items-center mb-[24px] ml-[54px] text-[#56616B]">
              <div className="w-[20px] h-[20px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326656/main%20stack/alarm_ajk9z5.png"
                  alt=""
                />
              </div>
              <button>
                <p>Item 7</p>
              </button>
            </div>
          </div>
        </div>

        <div className="ml-[54px] flex justify-between items-center mr-[16px] mt-[152px] mb-[60px]">
          <div className="flex items-center gap-[12px] text-[#56616B]">
            <button>
              <div className="w-[32px] h-[32px] flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326657/main%20stack/unsplash_F16KPYxfm6s_vptmht.png"
                  alt=""
                  width={"32px"}
                  height={"32px"}
                  className="rounded-full"
                />
              </div>
            </button>
            <p className="15px">Blessing Daniels</p>
          </div>
          <button>
            <div className="w-[20px] h-[20px] flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682326657/main%20stack/more_horiz_ywpzbk.png"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

// export default SideNav;
