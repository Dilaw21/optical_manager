
import frappeAPI from '../api/frappeAPI';

export function createCustomer(data) {
    return frappeAPI.post("/api/resource/Customer", data);
}