import json
from typing import Optional
import logging

logger = logging.getLogger(__name__)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    filename='repository.log',
    filemode='a'
)


class TicketRepository:
    def __init__(self, filepath: str):
        with open(filepath) as json_file:
            self.data = json.load(json_file)

    def get_tickets(self, limit: Optional[int] = None) -> list[dict]:
        return self.data["tickets"][:limit]
    
    # added a method to remove a ticket by its ID
    def remove_ticket(self, ticket_id: int):
        logger.info(f"Attempting to remove ticket with ID {ticket_id}")
        ticket_exists = any(ticket["id"] == ticket_id for ticket in self.data["tickets"])
        if not ticket_exists:
            logger.warning(f"Ticket with ID {ticket_id} not found")
            raise ValueError(f"Ticket with ID {ticket_id} not found")

        self.data["tickets"] = [ticket for ticket in self.data["tickets"] if ticket["id"] != ticket_id]
        logger.info(f"Ticket with ID {ticket_id} successfully removed")


