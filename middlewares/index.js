// Load in our dependencies
const util = require('util')
const path = require('path')

// Load in our Image Sequelize model
const { Image } = require('../models')

// Defines the Express middleware that will upload our image
const uploadImage = async (req, res, next) => {
  
  // Define the absolute final file path for this image
  let uploadPath = `${__dirname}/../public/images/%s%s`
  
  // If the previous middleware did not pass us an imageId then bail
  if (!req.imageId) { return }
  
  // Check to see if there are any files to upload
  if (Object.keys(req.files).length > 0) {

    // Get the extension from the incoming file (ie: .png,.jpg,.gif)
    const extension = path.extname(req.files.image.name)

    // Render the final file path based off the imageId and file extension
    uploadPath = util.format(uploadPath, req.imageId, extension)
    
    // Perform the move/mv operation that moves the file from a temp directory to our final path
    return await req.files.image.mv(uploadPath)
      // Update the Image model with the new file extension uploaded
      .then(async () => await Image.update(
          { extension }, 
          { where: { id: Number(req.imageId) } }
        )
      )
  }
}

// Export our middlewares
module.exports = { uploadImage }