from app.repositories.ticket_repository import TicketRepository
import uvicorn
from fastapi import Depends, FastAPI
from fastapi.responses import JSONResponse
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
import logging


# Configure logging: logs will be saved to 'app.log' file
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    filename='app.log',  
    filemode='a'  # Append mode
)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

TICKET_FILEPATH = "../data/awesome_tickets.json"
ticket_repository = TicketRepository(filepath=TICKET_FILEPATH)


@app.get("/healthz")
async def root():
    return "OK"


@app.get("/tickets")
async def get_tickets(
    limit: int = 20,
    ticket_repository: TicketRepository = Depends(lambda: ticket_repository),
):
    tickets = ticket_repository.get_tickets(limit)
    return JSONResponse(tickets, status_code=200)


# created a new endpoint to handle ticket deletion requests
@app.delete("/tickets/{ticket_id}")
async def delete_ticket(ticket_id: str, ticket_repository: TicketRepository = Depends(lambda: ticket_repository)):
    try:
        logger.info(f"Received request to delete ticket with ID {ticket_id}")
        ticket_repository.remove_ticket(ticket_id)
    except ValueError as e:
        logger.error(f"Error in deleting ticket: {str(e)}")
        raise HTTPException(status_code=404, detail=str(e))
    logger.info(f"Ticket with ID {ticket_id} deleted successfully")
    return JSONResponse(status_code=200, content={"message": "Ticket removed"})


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=5001, reload=True)
