import tensorflow as tf


# Step 1. Prepare data
hello_data = 'Hello '
world_data = 'World!'


# Step 2. Define operation
hello = tf.constant(hello_data)
world = tf.constant(world_data)
concat = hello + world


# Step 3. Run operation
session = tf.Session()
print(session.run(concat))

print(dir(tf.app))
# print(help(tf.app))