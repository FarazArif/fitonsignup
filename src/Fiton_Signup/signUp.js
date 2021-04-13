import React from 'react'
import "./signUp.css";

export default function SignUp() {
    return (<>

        <div className="mostMainDiv">
            <div className="mainDiv1">

                <div className="mainDiv1_Img">

                </div>
                <div className="mainDiv1_Dec">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAAAyCAYAAABvTnFDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA21pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBQTI1QjMxOTc4REIxMUVBOUJDNkFGQzI4OTY0Qjg5QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QkZBMkRBNEY4MEYxMUVBQjlBNkUxMTlGMEVBQUE0NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QkZBMkRBM0Y4MEYxMUVBQjlBNkUxMTlGMEVBQUE0NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU3MWE3YjAzLTY2YTItNTE0OS1hZjU4LTU4MGM5ZTdlYWVjZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQTI1QjMxOTc4REIxMUVBOUJDNkFGQzI4OTY0Qjg5QyIvPiA8L3JkZjpE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" />
                    <span>Stop Paying to work out</span>
                    <div className="mainDiv1_Dec_1">
                        <img src="https://app.fitonapp.com/static/media/icon-circle-done.f015a6b6.svg" />
                        <span>Unlimited workouts Unlimited workouts</span>
                    </div>
                    <div className="mainDiv1_Dec_1">
                        <img src="https://app.fitonapp.com/static/media/icon-circle-done.f015a6b6.svg" />
                        <span>Unlimited workouts Unlimited workouts</span>
                    </div>
                    <div className="mainDiv1_Dec_1">
                        <img src="https://app.fitonapp.com/static/media/icon-circle-done.f015a6b6.svg" />
                        <span>Unlimited workouts Unlimited workouts</span>
                    </div>
                    <div className="mainDiv1_Dec_1">
                        <img src="https://app.fitonapp.com/static/media/icon-circle-done.f015a6b6.svg" />
                        <span>Unlimited workouts Unlimited workouts</span>
                    </div>

                </div>

            </div>
            <div className="mainDiv2">
                <span>Login</span>
                <h2>Create Free Account</h2>
                <div className="btn_maindiv">
                    <div className="fb_btn">
                        <img src="https://app.fitonapp.com/static/media/facebook-blue.a9f2a496.svg" />
                        <span>SIGN UP WITH FACEBOOK</span>
                    </div>
                    <div className="google_btn">
                        <img src="https://app.fitonapp.com/static/media/icon-google.ead02171.svg" />
                        <span>SIGN UP WITH GOOGLE</span>
                    </div>
                    <span>  or </span>

                    <input className="inputField" type="text" placeholder="Name" />
                    <input className="inputField" type="text" placeholder="Email" />
                    <input className="inputField" type="text" placeholder="Password" />
                    <button className="btn">JOIN FREE</button>

                </div>

            </div>

        </div>

    </>)
}