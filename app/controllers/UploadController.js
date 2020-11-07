const path = require('path')
const fs = require('fs')

/**
 * <input name="flag" type="file" />
 * req.files.flag.name  (file name)
 * req.files.flag.mv ( A function to move the file elsewhere on your server. Can take a callback or return a promise.)
 * req.files.flag.mimetype (The mimetype of your file)
 * req.files.flag.data: A buffer representation of your file, returns empty buffer in case useTempFiles option was set to true.
 * req.files.flag.tempFilePath: A path to the temporary file in case useTempFiles option was set to true.
 * req.files.flag.truncated: A boolean that represents if the file is over the size limit
 * req.files.flag.size: Uploaded size in bytes
 * req.files.flag.md5: MD5 checksum of the uploaded file
 * @param flag | name attribute of input type="file" control
 * 
 * @param {*} request 
 * @param {*} response 
 * @Comment upload file
 * @url https://www.npmjs.com/package/express-fileupload
 * @param request.tableName | the storage folder name
 */
exports.upload = async (request, response) => { 

console.log(request.files);
return
  if (!request.files || Object.keys(request.files).length === 0) {
    return response.status(400).send('No files were provided.')
  }
  // the uploaded file object
  console.log(request.files)

  // The name of the input field (i.e. "flagFile") is used to retrieve the uploaded file
  const uploadedFile = request.files.flag
  const uploadedFileName = uploadedFile.name

  // storage folder location
  const uploadLocation = path.join(__dirname, '/../../public/upload/', request.body.tableName, '/')

  // create folder if not exist
  if (!fs.existsSync(uploadLocation)) {
    fs.mkdirSync(uploadLocation)
  }

  // Use the mv() method to place the file somewhere on your server
  uploadedFile.mv(path.join(uploadLocation, uploadedFileName), (err) => {
    if (err) {
      return response.status(500).send(err)
    }
    response.send('Upload process Successfully Completed!')
  })

}