const ProfileCard = () => {
  return (
    <div className=" bg-white rounded-xl p-4   flex flex-col gap-3 md:flex-row md:gap-10">
      {/* Profile Image */}
      <div className="">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEf6v6qksfE8Eaj73u8eSWrWGpSBqBOGxqj3BtGTHhPY_4RxbVG3YPLfht6zG2s3yrkng&usqp=CAU" // 
          alt="Profile"
          className="rounded-xl object-cover h-64 w-52"
        />
      </div>

      <div className="w-3/5">
        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
          {/* Name + Buttons */}
          <div className="space-y-4 ">
            
            <div className="flex flex-col space-y-2">
              <button className="bg-rose-500 text-white py-2 px-10 rounded-md hover:bg-rose-600 transition">
                Connect Now
              </button>
              <button className="btn-outline border border-rose-500 text-rose-500 py-2 px-10 rounded-md hover:bg-rose-100 transition">
                Request Chat
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className=" text-gray-700 space-y-2 mb-10">
            <div className="flex justify-between">
             <span>
                <strong>Name:</strong> Zara Islam
              </span>
              <span>
                <strong>Religion:</strong> Islam
              </span>
            </div>
            <div className="flex justify-between">
              <span>
                <strong>Age:</strong> 32 Yr
              </span>
              <span>
                <strong>Height:</strong> 5ft 2In – 157cm
              </span>
            </div>
            <div className="flex justify-between">
              <span>
                <strong>Marital Status:</strong> Never Married
              </span>
            </div>
            <div className="flex justify-between gap-2">
              <span>
                <strong>Language:</strong> English
              </span>
              <span>
                <strong>Community:</strong> VANNIYAR, BC
              </span>
            </div>
            <div>
              <span>
                <strong>Place:</strong> Chennai, Tamil Nadu
              </span>
            </div>
          </div>
        </div>

        <div>
          {/* Details Section */}
          <div className=" border-t pt-4 text-sm">
            <p>
              <strong>Details:</strong>
              <br />I am currently working in the UK.  I am passionate about Art
              & Craft, Traveling. I am looking for weI am currently working in the UK. I am passionate about Art
              & Craft, Traveling.l
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
