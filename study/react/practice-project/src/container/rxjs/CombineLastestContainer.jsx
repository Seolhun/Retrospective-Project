import React, { Component, Fragment } from 'react';

import { timer } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

class CombineLastestContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: [],
		}

		const timerOne = timer(1000, 4000);
		const timerTwo = timer(2000, 4000);
		const timerThree = timer(3000, 4000);
		const combined = combineLatest(timerOne, timerTwo, timerThree);
		const subscribe = combined.subscribe(([timerValOne, timerValTwo, timerValThree]) => {
			console.log(`
				Timer One Latest: ${timerValOne},
				Timer Two Latest: ${timerValTwo},
				Timer Three Latest: ${timerValThree}
			`);
		});
	}

	render() {
		return (
			<Fragment>
				<section>
					<h2>CombineLastestContainer</h2>
					<div className='row'>
						<div className='col-sm-12'>
							{
								this.state.result.map((result, idx) => {
									return <div key={idx}>
										{result}
									</div>;
								})
							}
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default CombineLastestContainer;
