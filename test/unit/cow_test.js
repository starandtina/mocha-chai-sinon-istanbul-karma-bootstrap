var expect = chai.expect;
var should = chai.should();

describe("Cow", function () {
  var sandbox;
  var logStub;
  var errorStub;

  beforeEach(function () {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    logStub = sandbox.stub(window.console, "log");
    errorStub = sandbox.stub(window.console, "error");
  });

  afterEach(function () {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe("constructor", function () {
    it("should have a default name", function () {
      var cow = new Cow();
      expect(cow.name).to.equal("Anon cow");
    });

    it("should set cow's name if provided", function () {
      var cow = new Cow("Kate");
      expect(cow.name).to.equal("Kate");
    });
  });

  describe("#greets", function () {
    it("should throw if no target is passed in", function () {
      expect(function () {
        (new Cow()).greets();
      }).to.
      throw (Error);
    });

    it("should greet passed target", function () {
      var greetings = (new Cow("Kate")).greets("Baby");
      expect(greetings).to.equal("Kate greets Baby!");
    });
  });

  describe("#lateGreets", function () {
    it("should pass an error if no target is passed", function (done) {
      (new Cow()).lateGreets(null, function (err, greetings) {
        expect(err).to.be.an.instanceof(Error);
        done();
      });
    });

    it("should greet passed target after one second", function (done) {
      (new Cow("Kate")).lateGreets("Baby", function (err, greetings) {
        expect(greetings).to.equal("Kate greets Baby!");
        done();
      });
    });
  });

  describe("#greetsToConsole", function () {
    it("should log an error if no target is passed in", function () {
      (new Cow()).greetsToConsole();

      logStub.notCalled.should.be.ok;
      errorStub.should.have.been.calledOnce;
      errorStub.should.have.been.calledWithExactly("missing target");
    });

    it("should log greetings", function () {
      var greetings = (new Cow("Kate")).greetsToConsole("Baby");

      errorStub.notCalled.should.be.ok;
      logStub.should.have.been.calledOnce;
      logStub.should.have.been.calledWithExactly("Kate greets Baby");
    });
  });
});