var Library = React.createClass({
  expand: function() {
    var types = this.props.library.data.types;
    for (var i = 0; i < types.length; i++) {
      console.log(types[i]);
    }
  },
  render: function() {
    console.log(this.props.library);
    return (
      <div className="library" onClick={this.expand}>
        {this.props.library.name}
      </div>
    );
  }
});

var Sidebar = React.createClass({
  render: function(){
    var libraryNodes = this.props.libraryData.map(function(library){
      return (
        // <li>{library}</li>
        <Library library={library}/>
      );
    });
    return (
      <div className="Sidebar">
        <h1>Libraries</h1>
        <ul className="LibraryList">
          {libraryNodes}
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;
