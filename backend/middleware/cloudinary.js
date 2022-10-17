import * as cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// export const upload = (file) => {
//   cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
//   });

//   return new Q.Promise((resolve, reject) => {
//     cloudinary.v2.uploader.upload(file, (err, res) => {
//       if (err) {
//         console.log("cloudinary err:", err);
//         reject(err);
//       } else {
//         console.log("cloudinary res:", res);
//         return resolve(res.url);
//       }
//     });
//   });
// };

export default { cloudinary };
