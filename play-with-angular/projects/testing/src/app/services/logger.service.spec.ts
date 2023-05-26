import { LoggerService } from "./logger.service"


describe("Logger Service", () => {

  let loggerService: LoggerService

  beforeEach(() => {
    loggerService = new LoggerService() // Arrange
  })

  it("should add new log messages", () => {
    loggerService.log("message-1") // Act
    expect(loggerService.messages.length).toBe(1)
  })
  it("should clear log messages", () => {
    loggerService.log("message-1") // Act
    loggerService.log("message-2") // Act
    loggerService.clear() // Act
    expect(loggerService.messages.length).toBe(0)
  })

})