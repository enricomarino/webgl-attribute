
module.exports = attribute;

function attribute (context) {

  /**
   * Attribute
   * Creates an attribute.
   * Represents an attribute variable in a shader program.
   * @param {Object} options The options for creating the attribute.
   *   @param {String} [options.name] The name of the attribute.
   *   @param {Number} [options.type] The WebGL type of the attribute.
   *   @param {Number} [options.size] The size of the attributes in bytes.
   *   @param {Number} [options.location] The index location in the shader.   
   *   @param {WebGLProgram} [options.program] The WebGL program.   
   * @api public
   */

  function Attribute (options) {
    options = options || {};
    this.name = options.name;
    this.type = options.type;
    this.size = options.size;
    this.location = options.location;
    this.program = options.program;
  };

  /**
   * Attribute#index
   * Get/set the index of this attribute.
   * @return {Number} [number] The current index of this attribute in the program.
   */

  Attribute.prototype.index = function (n) {
    if (n) {
      return this.set_index(n);
    }
    return this.get_index();
  };


  /**
   * Attribute#get_index
   * Get the index of this attribute.
   * @return {Number} The current index of this attribute in the program.
   */

  Attribute.prototype.get_index = function () {
    return this.location;
  };

  /**
   * Attribute#set_index
   * Set the index of this attribute.
   * @param {v3.Program} program The program that use the attribute.
   * @param {Number} n The index to set.
   * @return {v3.Attribute} this for chaining.
   * @api public
   */

  Attribute.prototype.set_index = function (n) {
    context.bindAttribLocation(this.program, n, this.name);
    this.location = n;
    return this;
  }; 

  return Attribute;
};
