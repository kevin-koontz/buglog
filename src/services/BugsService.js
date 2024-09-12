import { dbContext } from "../db/DbContext.js"

class BugsService {
  async createBugs(bugData) {
    const bug = await dbContext.Bugs.create(bugData)
    await bug.populate('creator')
    return bug
  }

}

export const bugsService = new BugsService()