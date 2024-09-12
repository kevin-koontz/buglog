import { dbContext } from "../db/DbContext.js"

class BugsService {
  async createBugs(bugData) {
    const bug = await dbContext.Bugs.create(bugData)
    return bug
  }

}

export const bugsService = new BugsService()