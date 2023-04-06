export default class HandGestureService {
  #fingerpose
  #handPoseDetection
  #handsVersion
  #detector = null
  constructor({ fingerpose, handPoseDetection, handsVersion }) {
    this.#fingerpose = fingerpose
    this.#handPoseDetection = handPoseDetection
    this.#handsVersion = handsVersion
  }
  async initializeDetector() {
    const model = handPoseDetection.SupportedModels.MediaPipeHands
    const detectorConfig = {
      runtime: 'mediapipe', // or 'tfjs',
      solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
      modelType: 'full'
    }
    const detector = await handPoseDetection.createDetector(model, detectorConfig)
  }
}