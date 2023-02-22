import { Injectable } from '@nestjs/common';
import { TaskService } from './task.service';

@Injectable()
export class CronTaskService extends TaskService {
	private _taskModule;
	private _setClose = false;
	protected type = 'cron';

	setModule(taskModule) {
		this._taskModule = taskModule;

		return this;
	}

	setClose(flag: boolean = true) {
		this._setClose = flag;
	}

	protected async takeOver(name: string, data): Promise<any> {
		(async () => {
			try {
				await this.processWrapper(new Date());
			}
			catch (err) {
				console.log(`Cron task "${this.constructor.name} error. [${err.message}]"`);
			}
		})();
		
		return this;
	}

	protected closeTask() {
		if (this._setClose) {
			this._taskModule.close();
		}
	}

	protected async onNextWrapper(timestamp: Date, options: object, output: any): Promise<any> {
		setTimeout(this.closeTask.bind(this), 1000);

		return await super.onNextWrapper(timestamp, options, output);
	}
}
