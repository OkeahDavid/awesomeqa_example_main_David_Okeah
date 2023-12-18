# Import the TicketRepository class
from app.repositories.ticket_repository import TicketRepository

def test_remove_ticket():
    # Define the path to your test JSON file
    test_json_path = "../data/copy_of_awesome_tickets.json"

    # Creating an instance of TicketRepository with test data
    repo = TicketRepository(test_json_path)

    # ID of the ticket to remove
    ticket_id_to_remove = '83a1af5b-5817-44f9-acbf-d0bef22b3759'

    # Remove the ticket
    repo.remove_ticket(ticket_id_to_remove)

    # Assert that the ticket is no longer in the data
    assert all(ticket['id'] != ticket_id_to_remove for ticket in repo.data["tickets"])
