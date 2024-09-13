import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class BugsService {
  async createBugs(bugData) {
    const bug = await dbContext.Bugs.create(bugData)
    
    return bug
  }

  async getAllBugs() {
   const bugs = await dbContext.Bugs.find()
   return bugs
  }

  
  
  // NOTE here is the correlary function i wrote for the controller
  async getBugById(bugId, creatorId) {
    const bug = (await dbContext.Bugs.findById(bugId, creatorId))
    
    if(bug == null){
      throw new BadRequest(`Can't find bug by id of ${bugId}`)
    }
// NOTE I'm not thinking this next step for the populate 'creator' object through logically enough, might be a good one to troubleshoot for you
    if (bug.creatorId != creatorId) {
      
    }
    return bug.populate('creator')
  }

    
 


    

}

export const bugsService = new BugsService()