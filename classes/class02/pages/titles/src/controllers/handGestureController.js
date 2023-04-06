export default class HandGestureController {
  #view
  #service
  constructor({ view, service }) {
    this.#service = service
    this.#view = view
  }
  async init() {
  }

  static async initialize(deps) {
    const controller = new HandGestureSController(deps)
    return controller.init()
  }
}