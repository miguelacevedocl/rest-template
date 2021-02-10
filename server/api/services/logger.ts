import * as request from 'request-promise';
import logger from '../../common/logger'

export interface Message {
    message: string;
    callId: string;
    timeElapsed: number;
    country: string;
    severity: string;
    method: string
}

export const Send = async (log: Message) => {

    let appId = process.env.APP_ID
    var splunkIndex = process.env.SPLUNK_INDEX

    let messageToSend = {
        'id': log.callId,
        'country': log.country,
        'message': log.message,
        'apiurl': log.method,
        'timeelapsed': log.timeElapsed,
        'system': appId,
        'severity': log.severity,
    }

    logger.info(messageToSend)

    let requestConfig = {
        uri: process.env.SPLUNK_HOST,
        headers: {
            Authorization: process.env.SPLUNK_TOKEN
        },
        body: JSON.stringify({
            event: messageToSend,
            'index': splunkIndex
        })
    }

    request.post(requestConfig)
}