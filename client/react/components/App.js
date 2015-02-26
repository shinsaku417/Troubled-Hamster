var Sidebar = require('./Sidebar');
var Documentation = require('./Documentation');
var Resources = require('./Resources');
var AppStore = require('../store/AppStore');

var data = ['underscore', 'backbone', 'node'];
var library = 'iefhqeifweifh';
var method = '';

var App = React.createClass({

  // getAppState: function(){},

  getInitialState: function() {
    return AppStore.getSelection();
      // libraries: data,
      // library: library,
      // method: method
  },

  componentDidMount: function() {
    var libraryData = [];
    var libraries = this.state.libraries;
    var len = libraries.length;
    var context = this;
    // this.setState({
    //   library: libraries,
    //   libraryData: libraryData
    // })
    libraries.forEach(function(library, index) {
      $.ajax({
        url: 'http://localhost:3000/test',
        dataType: 'json',
        success: function(data) {
          console.log('successfully fetched data for library ', library);
          libraryData.push({
            name: library,
            data: data
          });
          if (index === len - 1) {
            if (context.isMounted()) {
              context.setState({
                libraries: libraries,
                libraryData: libraryData
              });
            }
          }
        },
        error: function(xhr, status, err) {
          console.error('error getting data for library ', library);
        }
      });
    });
  },

  render: function(){
    return (
      <div className="app">
        <Sidebar libraryData={this.state.libraryData} />
        <Documentation library={this.state.library} />
      </div>
    );
  }
});

module.exports = App;
