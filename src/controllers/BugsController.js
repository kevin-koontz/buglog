import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { bugsService } from "../services/BugsService.js"


export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('', this.getAllBugs)
      .get('/:bugId', this.getBugById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBugs)

  }
  

  async createBugs(request, response, next) {
    try {
      const bugData = request.body
      const user = request.userInfo
      bugData.creatorId = user.id
      const bug = await bugsService.createBugs(bugData)
      response.send(bug)
    } catch (error) {
      next(error)
    }
  }


  async getAllBugs(request, response, next){
    try {
      const bugs = await bugsService.getAllBugs()
      response.send(bugs)
    } catch (error) {
      next(error)
    }
  }

// NOTE we are getting bugs by ID, however, creator must be populated and is returning as null, 2/3 tests are passing


  async getBugById(request, response, next) {
    try {
      const bugId = request.params.bugId
      const creator = request.creator
      const creatorInfo = request.creatorId
      const bug = await bugsService.getBugById(bugId, creator)
      response.send(bug)
    } catch (error) {
      next(error)
    }
  }





}