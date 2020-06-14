using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
         public class Command : IRequest
                {
                  
                    public Guid Id {get;set;}
                }
        
        
                public class Handler : IRequestHandler<Command>
                {
                    private readonly DataContext _context;
                    public Handler(DataContext context)
                    {
                        _context = context;
                    }
        
                    public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                    {
                           //command handler logic goes here
                           var activity = await _context.Activities.FindAsync(request.Id);

                           if(activity==null)
                                throw new Exception("There was an error deleting this activity.Activity not found");


                            _context.Remove(activity); //pos claro antes no habia sido borrada
        
                            var success= await _context.SaveChangesAsync()>0;
        
                            if(success){
                                return Unit.Value; //A token return just to indicate everything went well
                            }
        
                            throw new Exception("Problems saving changes");
                            
                    }
                }
    }
}