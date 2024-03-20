let heading  =  React.createElement("div",{id:"parent"},
                    React.createElement("div",{id:"child"}, [
                            React.createElement("h1",{},"Hi This is H1 Tag"),
                            React.createElement("h2",{},"Hi this is h2 Tag")
                        ]
                    )
                );
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
  