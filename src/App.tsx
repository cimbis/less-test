import "@ids-core/button"
import "@ids-core/typography";
import "@ids-core/color";
import "@ids-core/panel/src/panel.less";
import "@ids-core/checkbox/src/checkbox.less";
import "@ids-core/radio-buttons/src/radio-buttons.less";

function App() {
    return (
        <div className="if app">
            <div className="if container">
                <div className="if panel is-expandable light is-open">
                    <div className="if title" aria-controls="exp1" aria-expanded="true">
                        Tips och råd
                    </div>
                    <div className="if content" role="region" id="exp1">
                        <button className="if button primary" type="button">A button</button>
                    </div>
                </div>
            </div>

            <div className="if container">
                <form autoComplete="off" action="">
                    <div className="if input-wrapper">
                        <div className="if checkboxes horizontal">
                            <input
                                id="checkboxes-section-md-checkbox-1"
                                type="checkbox"
                                className="if checkbox"
                            />
                            <label htmlFor="checkboxes-section-md-checkbox-1"
                            >
                                A path! A path!
                            </label>
                            <input
                                id="checkboxes-section-md-checkbox-2"
                                type="checkbox"
                                className="if checkbox"
                            />
                            <label htmlFor="checkboxes-section-md-checkbox-2"
                            >
                                A path! A path!
                            </label>
                            <input
                                id="checkboxes-section-md-checkbox-3"
                                checked={ true }
                                type="checkbox"
                                className="if checkbox"
                            />
                            <label htmlFor="checkboxes-section-md-checkbox-3">
                                A path! A path!
                            </label>
                        </div>
                    </div>
                </form>
            </div>

            <div className="if container">
                <form autoComplete="off" action="">
                    <div className="if input-wrapper">
                        <div className="if radio-buttons">
                            <input
                                type="radio"
                                id="radio-buttons-section-md-radio-button-1"
                                className="if radio-button"
                                name="radio-buttons"
                            />
                            <label htmlFor="radio-buttons-section-md-radio-button-1">
                                Default
                            </label>

                            <input type="radio"
                                   id="radio-buttons-section-md-radio-button-2"
                                   className="if radio-button is-hovered"
                                   name="radio-buttons"
                            />
                            <label htmlFor="radio-buttons-section-md-radio-button-2">
                                Hovered
                            </label>

                            <input type="radio"
                                   id="radio-buttons-section-md-radio-button-3"
                                   className="if radio-button is-active"
                                   name="radio-buttons"
                            />
                            <label htmlFor="radio-buttons-section-md-radio-button-3">
                                Pressed/Active
                            </label>

                            <input
                                type="radio"
                                id="radio-buttons-section-md-radio-button-4"
                                className="if radio-button is-focused"
                                name="radio-buttons"
                            />
                            <label htmlFor="radio-buttons-section-md-radio-button-4">
                                Focused
                            </label>

                            <input type="radio" id="radio-buttons-section-md-radio-button-5"
                                   className="if radio-button is-invalid" name="radio-buttons"
                            />
                            <label htmlFor="radio-buttons-section-md-radio-button-5">
                                Error
                            </label>

                            <input type="radio"
                                   disabled={ true }
                                   id="radio-buttons-section-md-radio-button-6"
                                   className="if radio-button"
                                   name="radio-buttons"
                            />
                            <label htmlFor="radio-buttons-section-md-radio-button-6">
                                Disabled
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App
