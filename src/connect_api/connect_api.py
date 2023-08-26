import vertexai
from vertexai.language_models import ChatModel, InputOutputTextPair

vertexai.init(project="linear-cinema-379105", location="us-central1")
chat_model = ChatModel.from_pretrained("chat-bison@001")
parameters = {
    "max_output_tokens": 256,
    "temperature": 0.2,
    "top_p": 0.8,
    "top_k": 40
}
chat = chat_model.start_chat(
    context="""You are a chef that specializes in designing recipes and diet plans which are gluten free.""",
)
response = chat.send_message("""I want to cook banana bread today. Can you suggest a good recipe?""", **parameters)
print(f"Response from Model: {response.text}")
response = chat.send_message("""What\'s my diet plan? Help me create one. I want to lose some weight.""", **parameters)
print(f"Response from Model: {response.text}")