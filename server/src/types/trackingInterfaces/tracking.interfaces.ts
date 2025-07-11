import { Tracking } from '../../models/tracking.model'

interface CreateTracking {
    habits_id: number
    date: string
    done: string
}

interface UpdateTracking {
    done: string
}

export interface ITrackingService {
    createTracking(data: CreateTracking): Promise<Tracking>
    updateTracking(habits_id: number | string, id:number ,data: UpdateTracking): Promise<Tracking | null>
}